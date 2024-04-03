module.exports = {
    apps: [
        {
            name: 'boycott-api',
            script: 'npm',
            args: 'run start:prod',
            instances: 'max',
            exec_mode: 'cluster',
            increment_var: 'PORT',
            time: true,
            env: {
                PORT: 3001,
            },
        },
    ],
}
