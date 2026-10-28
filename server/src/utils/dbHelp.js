// Turns MongoDB connection errors into a short message that says what to fix.
export function explainDbError(err, uri = '') {
  const msg = String((err && err.message) || err);
  const deep = JSON.stringify(err && err.reason ? [...(err.reason.servers?.values?.() || [])].map(s => s.error && s.error.message) : []);
  const all = msg + ' ' + deep;
  const lines = ['', '✖ Could not connect to MongoDB.'];

  if (/<password>|<db_password>/.test(uri) || /mongodb(\+srv)?:\/\/[^:]+:@/.test(uri)) {
    lines.push('→ MONGODB_URI has no password. Put your Atlas database-user password after the username and ":" in server/.env.');
  } else if (/ENOTFOUND|querySrv/i.test(all)) {
    lines.push('→ The cluster address in MONGODB_URI is wrong, or there is no internet. Copy the string again from Atlas → Connect → Drivers.');
  } else if (/bad auth|Authentication failed/i.test(all)) {
    lines.push('→ Username or password is wrong. Atlas → Database Access → Edit user → set a new password (letters + numbers only) and put it in MONGODB_URI.');
  } else if (/tlsv1 alert|SSL alert number 80|whitelist|ECONNRESET|ETIMEDOUT|Server selection timed out/i.test(all)) {
    lines.push('→ Atlas is refusing this computer. Usually your IP address is not allowed:');
    lines.push('   1. cloud.mongodb.com → your project → Security → Network Access → "+ ADD IP ADDRESS"');
    lines.push('   2. Click "ADD CURRENT IP ADDRESS" (or "ALLOW ACCESS FROM ANYWHERE" = 0.0.0.0/0) → Confirm');
    lines.push('   3. Wait until the status says "Active" (1-2 minutes), then run the command again.');
    lines.push('   Still failing? Check the cluster is not Paused (Database → Resume), or try another network');
    lines.push('   (e.g. phone hotspot): office Wi-Fi / antivirus / VPN often block port 27017.');
  } else if (/ECONNREFUSED/i.test(all)) {
    lines.push('→ No MongoDB is running at that address. For Atlas use the mongodb+srv://… string; for a local MongoDB start the MongoDB service first.');
  } else {
    lines.push('→ ' + msg);
  }
  lines.push('Test the connection any time with:  npm --prefix server run check-db', '');
  return lines.join('\n');
}
