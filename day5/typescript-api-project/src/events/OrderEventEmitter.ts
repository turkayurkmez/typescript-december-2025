import {  EventEmitter } from "events";

//Order tipi tanimlamasi
 interface Order{
    id: string;
    items: string[];
    totalAmount: number;
    customerName: string;
    status: 'pending'|'paid'|'shipped'|'delivered' |'cancelled';
}

interface OrderEvents{
    orderCreated: (order: Order) => void;
    orderPaid: (orderId: string) => void;
    orderShipped: (orderId: string, trackingNumber: string) => void;
    orderDelivered: (orderId: string) => void;
    orderCancelled: (orderId: string, reason: string) => void;
}


//OrderEventEmitter sinifi, OrderEvents arayuzundeki olaylari tip guvenli sekilde yaymak icin kullanilir
class OrderEventEmitter extends EventEmitter {
    emit<K extends keyof OrderEvents>(
        event: K,
        ...args: Parameters<OrderEvents[K]>): boolean {
        return super.emit(event, ...args);
    }
    //on metodunu da tip guvenli hale getir
    on<K extends keyof OrderEvents>(
        event: K,
        listener: OrderEvents[K]
    ): this {
        return super.on(event, listener);
    }

    //once metodu - sadece bir kez dinleyici ekler
    once<K extends keyof OrderEvents>(
        event: K,
        listener: OrderEvents[K]
    ): this {
        return super.once(event, listener);
    }
}   

export const orderEventEmitter = new OrderEventEmitter();
export type { Order };


