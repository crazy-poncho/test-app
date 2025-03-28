import React, { ReactNode } from 'react';

type ErrorBoundaryProps = {
  children?: ReactNode;
};

export class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  constructor(props) {
    super(props);
  }

  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return <div>Error: {this.state.error.message}</div>;
    }
    return this.props.children;
  }
}
