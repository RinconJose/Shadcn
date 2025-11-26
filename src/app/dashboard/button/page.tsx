'use client';

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { CircleFadingArrowUpIcon, GitBranch } from "lucide-react";

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-5">
      <Button>Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button disabled>Disabled</Button>
      <Button onClick={() => console.log('clicked this button')}>Click me</Button>
      <Button variant="success">Success</Button>
      <Button capitalize={false}>capitalize false</Button>
      <Button variant="outline" size="icon">
        <CircleFadingArrowUpIcon />
      </Button>
      <Button variant="outline" size="sm">
        <GitBranch /> New Branch
      </Button>
      <Button size="sm" variant="outline" disabled>
        <Spinner />
      </Button>
    </div>
  );
}
