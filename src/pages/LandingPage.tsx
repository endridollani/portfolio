import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { AlignJustify } from 'lucide-react';
import brancIcon from '@/assets/brand.svg';
import React from 'react';

export const LandingPage: React.FC = () => {
    return (
        <>
            <div id="main-container" className="p-5 flex flex-col gap-5">
                <div className="flex flex-row justify-between items-center">
                    <Avatar className="w-20 h-20" draggable={false} >
                        <AvatarImage src={brancIcon} alt="brand icon" />
                    </Avatar>
                    <div className="hidden sm:visible sm:flex sm:flex-row sm:items-center">
                        <Button variant={"ghost"} className="font-normal font-inter text-md cursor-pointer">About</Button>
                        <Button variant={"ghost"} className="font-normal font-inter text-md cursor-pointer">Work</Button>
                        <Button variant={"ghost"} className="font-normal font-inter text-md cursor-pointer">Contact</Button>
                    </div>
                    <AlignJustify size={30} className="sm:hidden" />
                </div>
                <div className="w-full flex justify-center flex-col gap-5 items-center bg-accent py-5 rounded-md bg-[url(./assets/hero.png)]">
                    <div className="flex flex-col items-center font-inter">
                        <div className="text-lg font-inter">
                            Software Engineer
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </>
    );
}