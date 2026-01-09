import ShowcaseList from '../showcase/showcase-list';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../ui/dialog';
import { ScrollArea } from '../ui/scroll-area';

export default function ProjectsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-4">View Final Projects</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Projects</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[500px] pr-2">
          <ShowcaseList />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
