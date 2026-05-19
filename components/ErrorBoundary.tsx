'use client'

import React, { Component, type ReactNode } from 'react'

interface Props {
    children: ReactNode
    fallback?: ReactNode
}

interface State {
    hasError: boolean
}

const defaultFallback = (
    <div className="flex items-center justify-center min-h-[200px] p-8">
        <div className="text-center">
            <p className="text-lg font-bold text-slate-700 dark:text-slate-300">
                Ein Fehler ist aufgetreten. Bitte laden Sie die Seite neu.
            </p>
        </div>
    </div>
)

export default class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(): State {
        return { hasError: true }
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback ?? defaultFallback
        }
        return this.props.children
    }
}
