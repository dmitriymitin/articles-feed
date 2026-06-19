const interfaceConst = 'interface';

module.exports = (componentName) => `
${interfaceConst} ${componentName}Props {}

export const ${componentName} = (props: ${componentName}Props) => {
    return (
        <div>
           ${componentName}
        </div>
    );
};`;
