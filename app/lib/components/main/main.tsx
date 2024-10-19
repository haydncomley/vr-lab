import { Canvas } from '@react-three/fiber'
import { PropsWithChildren } from 'react';

import { createXRStore, XR } from '@react-three/xr';

import styles from './main.module.scss';

const store = createXRStore()

interface MainProps {}

export const Main = ({ children }: PropsWithChildren<MainProps>) => {
    return  (
        <>
            <Canvas>
                <XR store={store}>
                    {children}
                </XR>        
            </Canvas>

            <button className={styles.enter} onClick={() => store.enterVR()}>
                Enter VR
            </button>
        </>
    )
};

