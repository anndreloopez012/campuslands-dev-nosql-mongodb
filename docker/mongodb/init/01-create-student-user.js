const databaseName = process.env.MONGO_APP_DATABASE || 'campuslands';
const username = process.env.MONGO_APP_USERNAME || 'campus_student';
const password = process.env.MONGO_APP_PASSWORD || 'campus_student_123';

const database = db.getSiblingDB(databaseName);

if (!database.getUser(username)) {
  database.createUser({
    user: username,
    pwd: password,
    roles: [
      { role: 'readWrite', db: databaseName }
    ]
  });
}

database.metadata.insertOne({
  project: 'campuslands-dev-nosql-mongodb',
  database: databaseName,
  initializedAt: new Date(),
  purpose: 'Campuslands local MongoDB practice environment'
});
