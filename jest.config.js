module.exports = {
    reporters: ['default',  'jest-sonar'],
    outputDirectory: './coverage/sonar/',
    outputName: './coverage/sonar-reports.xml',
    reportedFilePath: 'absolute',
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    testPathIgnorePatterns: ["/lib/", "/node_modules/"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    collectCoverage: true,
};
