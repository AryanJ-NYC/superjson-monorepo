import React from 'react';
import { ClientComponent } from './ClientComponent';

export const ChildServerComponent: React.FC<Props> = ({ offer }) => (
  <div>
    <p>This is some other stuff</p>
    <ClientComponent offer={offer} data-superjson />
  </div>
);

type Props = {
  offer: { date: Date; id: string };
};
