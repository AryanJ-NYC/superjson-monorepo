'use client';

import React from 'react';

export const ClientComponent: React.FC<Props> = ({ offer }) => <p>{offer.date.toString()}</p>;

type Props = { offer: { date: Date; id: string } };
