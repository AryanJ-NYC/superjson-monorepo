import React from 'react';
import { ClientComponent } from './ClientComponent';

export const ChildServerComponent = () => <ClientComponent date={new Date()} data-superjson />;
