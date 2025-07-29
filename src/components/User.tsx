import { UserIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useStore } from "@/store/store";
import { useShallow } from "zustand/shallow";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useEffect } from "react";

export function User() {

    const { setAddress, address, fullName, userName, fetchUser } = useStore(useShallow((state) => ({
        setAddress: state.setAddress,
        address: state.address,
        fullName: state.fullName,
        userName: state.userName,
        fetchUser: state.fetchUser
    })));


    useEffect(() => {
        async function fetchData() {
            await fetchUser();
        }

        fetchData();
    }, [fetchUser])

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant='secondary' size='icon'>
                    <UserIcon />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="overflow-y-scroll space-y-2 w-96">
                <div className="flex items-center gap-2">
                    <p>{fullName}</p>
                    <p className="text-sm">{userName}</p>
                </div>

                <Label htmlFor="address">Your address:</Label>
                <Input id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
            </PopoverContent>
        </Popover >
    )
}
