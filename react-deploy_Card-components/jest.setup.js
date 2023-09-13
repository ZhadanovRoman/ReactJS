module.exports={
    preset: ' ts-jest',
    testInvironment: 'node',
    setypFilesAfterEnv:["<rootDir>/jest/setup.js"],
    moduleNameMapper: {
        "\\.(css)": "identity-obj-proxy"
    }
}