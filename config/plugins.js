module.exports = () => ({
    "custom-api": {
        enabled: true,
    },
    'environment-variables': {
        enabled: true,
      },
    backup: {
        
        enabled: false,
        // config: {
        //   cronSchedule: '0 9-17 * * *', // At minute 0 past every hour from 9 through 17
        //   storageService: 'google-drive',
        //   databaseDriver: 'sqlite',
        //   filePath: '.temp/database.db',  // Path to the SQLite database file
        //   allowCleanup: true,
        //   timeToKeepBackupsInSeconds: 172800, // 2 days
        //   sqliteExecutable: "/usr/bin/sqlite3",  // Correct property name
        //   sqlite3Executable:  "/usr/bin/sqlite3",  // Correct property name
        //   sqliteOptions: [
        //     '--new-database',  // Ensures a new database file is created if it does not exist
        //     '--batch-mode',    // Run commands in batch mode without prompts
        //     '--bail',          // Stop after hitting an error
        //   ],
        //   cleanupCronSchedule: '0 9 * * *', // Each day at 09:00 AM
        //   errorHandler: (error, strapi) => {
        //     console.log(`Backup Error: ${error.message}`);
        //   },
        // }
      },
      'import-export-entries': {
        enabled: true,
        config: {
          // Config details
        },
      },

});
