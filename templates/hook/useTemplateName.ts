interface TemplateNameProps {
    foo: string;
}

export const useTemplateName = ({
    foo
}: TemplateNameProps) => {
    console.log('Foo');
    return foo;
}

