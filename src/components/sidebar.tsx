"use client";

import Image from "next/image";
import MainButton from "~/app/_components/main-button";
import { TrophyIcon } from "./icons/TrophyIcon";
import { GraphIcon } from "./icons/GraphIcon";
import { PeopleIcon } from "./icons/PeopleIcon";
import { LocationIcon } from "./icons/LocationIcon";

export default function Sidebar() {
    const ICONS = {
        premier: <TrophyIcon width="20" height="20"/>,
        callouts: <LocationIcon width="20" height="20"/>,
        players: <PeopleIcon width="20" height="20"/>,
        stats: <GraphIcon width="20" height="20"/>
    }

    return (
        <aside className="flex py-4 flex-col items-center w-64 bg-sidebar-background text-white">
            <Image
                src="/underscore.svg"
                width={200}
                height={50}
                alt="UNDERSCORE logo"
                className="mb-8"
            />
            <nav className="w-3/4">
                <ul className="flex flex-col items-center gap-y-5">
                    <li className="w-full">
                        <MainButton text="Players" link="/dashboard/players" icon={ICONS.players}/>
                    </li>
                    <li className="w-full">
                        <MainButton text="Stats" link="/dashboard/stats" icon={ICONS.stats}/>
                    </li>
                    <li className="w-full">
                        <MainButton text="Callouts" link="/dashboard/callouts" icon={ICONS.callouts}/>
                    </li>
                    <li className="w-full">
                        <MainButton text="Premier" link="/dashboard/premier" icon={ICONS.premier}/>
                    </li>
                </ul>
            </nav>
      </aside>
    )
}