import { Button } from "./ui/button"

export const CtaBlockPage = ()=>{
    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-5  py-8">
                <h3 className="text-4xl">Find your match</h3>
                <p className="p-2 text-center">Whether you just want to flirt, make new friends or maybe something more, 
                this is the right place.</p>
                <Button className="bg- bg-blue-500">BECOME A MEMBER FOR FREE</Button>
            </div>
        </div>
    )
}