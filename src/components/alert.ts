import { createVNode, Plugin, render, inject } from 'vue'
import Alert from './Alert.vue'

interface Toaster {
    showToast(message: string): void;
}

// Served as standalone to be used e.g. in the router
export const toaster: Toaster = {
    showToast(message: string) {

        const container = document.createElement('div')
        document.body.appendChild(container)

        const toastVNode = createVNode(
            Alert,
            { message: message },
            null
        )

        render(toastVNode, container)

        setTimeout(function () {
            render(null, container)
            document.body.removeChild(container)
        }, 2500);

    }
}

// Served as plugin to be used inside components
export const createToaster: Plugin = {
    install(app) {
        toaster;
        app.provide("Toaster", toaster);

    }

}

export function useToaster(): Toaster {
    const injection: Toaster | undefined = inject('Toaster')
    if (injection === undefined) {
        throw new Error(`Could not resolve`)
    } else {
        return injection
    }
}