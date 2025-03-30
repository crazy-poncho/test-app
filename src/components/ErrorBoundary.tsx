import React, { ReactNode } from 'react';

import { ErrorPage } from '../pages';

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
      return <ErrorPage error={this.state.error} />;
    }
    return this.props.children;
  }
}
