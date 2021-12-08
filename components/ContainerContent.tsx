// cssfn:                      from '@cssfn/css-types'   // ts defs support for cssfn
import {
    // compositions:
    composition,
    mainComposition,
    imports,
    
    
    
    // layouts:
    layout,
}                           from '@cssfn/cssfn'       // cssfn core
import {
    // hooks:
    createUseSheet,
}                           from '@cssfn/react-cssfn' // cssfn for react

// nodestrap components:
import {
    // styles:
    usesContentMedia,
    usesContentBasicLayout,
    usesContentBasicVariants,
}                           from '@nodestrap/content'
import {
    // styles:
    usesContainerLayout,
    usesContainerVariants,
    
    
    
    // react components:
    ContainerProps,
    Container,
}                           from '@nodestrap/container'



// styles:
export const usesContainerContentLayout = () => {
    return composition([
        // imports([
        //     // media:
        //     // usesContentMedia(),
            
        //     // layouts:
        //     // usesContentBasicLayout(),
        //     usesContainerLayout(),
        // ]),
        layout({
            background: 'pink',
        })
    ]);
};
export const usesContainerContentVariants = () => {
    return composition([
        imports([
            // variants:
            // usesContentBasicVariants(),
            usesContainerVariants(),
        ]),
    ]);
};

export const useContainerContentSheet = createUseSheet(() => [
    mainComposition([
        imports([
            // layouts:
            usesContainerContentLayout(),
            
            // variants:
            // usesContainerContentVariants(),
        ]),
    ]),
]);



// react components:

export interface ContainerContentProps<TElement extends HTMLElement = HTMLElement>
    extends
        ContainerProps<TElement>
{
}
export function ContainerContent<TElement extends HTMLElement = HTMLElement>(props: ContainerContentProps<TElement>) {
    // styles:
    const sheet = useContainerContentSheet();
    
    
    
    // jsx:
    return (
        <Container<TElement>
            // other props:
            {...props}
            
            
            
            // classes:
            mainClass={props.mainClass ?? sheet.main}
        />
    );
}
export { ContainerContent as default }