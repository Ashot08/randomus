import * as React from 'react';
import { ErrorInfo, ReactNode } from 'react';

interface IErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component <IErrorBoundaryProps, IErrorBoundaryState>{
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info.componentStack, React.captureOwnerStack());
  }

  render() {
    const {hasError} = this.state;
    const {children, fallback} = this.props;
    if (hasError) {
      // You can render any custom fallback UI
      return fallback;
    }
    return children;
  }
}
