import { useStore } from '@/store/store'
import { Minus, Plus } from 'lucide-react';
import React, { useEffect } from 'react'
import { useShallow } from 'zustand/shallow';
import { Button } from './ui/button';

type ChangeQtyButtonsProps = {
    productId: string
}

export function ChangeQtyButtons({ productId }: ChangeQtyButtonsProps) {


    const { getProductsById, decQty, incQty, setTotal } = useStore(useShallow((state) => ({
        getProductsById: state.getProductById,
        decQty: state.decQty,
        incQty: state.incQty,
        setTotal: state.setTotal
    })));

    const product = getProductsById(productId);

    useEffect(() => {
        const unSub = useStore.subscribe((state) => state.products, (products) => {
            setTotal(products.reduce((acc, item) => acc + item.price * item.qty, 0))
        }, { fireImmediately: true })

        return unSub;
    }, [setTotal])

    return (
        <div className='flex gap-2 items-center'>
            <Button onClick={() => decQty(product?.id ?? '')} size="icon">
                <Minus />
            </Button>
            <p>{product?.qty}</p>
            <Button onClick={() => incQty(product?.id ?? '')} size="icon">
                <Plus />
            </Button>
        </div>
    )
}
