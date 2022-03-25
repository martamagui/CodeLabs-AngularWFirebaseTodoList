// Create a eviroment file with your credentials, just like sos

export const environmentCopy = {
  production: false,
  firebase: {
    firebase: {
      apiKey: '<your-key>',
      authDomain: '<your-project-authdomain>',
      databaseURL: '<your-database-URL>',
      projectId: '<your-project-id>',
      storageBucket: '<your-storage-bucket>',
      messagingSenderId: '<your-messaging-sender-id>',
    },
  }
};
