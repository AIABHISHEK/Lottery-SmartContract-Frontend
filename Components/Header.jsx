'use client'
import { useEffect } from "react";
import { useMoralis } from "react-moralis";
function Header(){
    const {enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3, isWeb3EnableLoading} = useMoralis();
    useEffect(() => {
        if(isWeb3Enabled)
            return
        if(window !== "undefined"){
            if(window.localStorage.getItem("connected")){
                enableWeb3();
            }
        }
        // return () => {
        //     cleanup
        // }
    }, [isWeb3Enabled])

    useEffect(() => {
        Moralis.onAccountChanged((account)=>{
            console.log(`Account changed ${account}`);
            if(account == null){
                window.localStorage.removeItem("connected")
                deactivateWeb3()
            }
        })
        return () => {
            cleanup
        }
    }, [])
    return(<div>
        {account?(<div>
            Connected to {account}
        </div>):(<div>
            <button onClick={async ()=>{
                await enableWeb3()
                if(window !== "undefined"){
                    window.localStorage.setItem("connected", "connectedToWallet")
                }
            }}
            disabled={isWeb3EnableLoading}>Connect</button>
        </div>)}
    </div>)
}

export default Header;