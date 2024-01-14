'use client'
import { useEvmNativeBalance } from '@moralisweb3/next';

 function Wallet()
{
    const address = '0xd8da6bf26964af9d7eed9e03e53415d37aa96045';
    const { data: nativeBalance } = useEvmNativeBalance({ address });
    console.log(nativeBalance);
    return<div className="flex w-screen h-screen over justify-center">
        <div className=" absolute bg-white bottom-0 backdrop-blur-[65px] w-[80vw] h-[70vh] opacity-[0.02]">
            <div >
                <div >
                    Wallet {address}
                </div>
                <div>
                    {nativeBalance?.balance.ether}
                </div>
            </div>
            <div>
                
                <div>
                    
                </div>
            </div>
        </div>
    </div>
}

export default Wallet;