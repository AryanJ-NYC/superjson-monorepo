import React from 'react';
// import { ChildServerComponent } from '@/shared/ChildServerComponent'; // also doesn't work
import { ChildServerComponent } from '../../../../packages/shared/pages/ChildServerComponent';

const Page = () => <ChildServerComponent offer={{ date: new Date(), id: '1' }} />;

export default Page;
