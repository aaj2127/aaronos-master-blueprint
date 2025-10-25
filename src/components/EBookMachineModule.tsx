import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

export function EBookMachineModule() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[var(--color-text)]">eBook Machine</h1>
        <p className="text-[var(--color-muted)] mt-2">
          Generate structured e-books from outlines and notes.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Start a new eBook</CardTitle>
          <CardDescription>Provide a title and outline to begin.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="w-full sm:w-auto">Create from Outline</Button>
            <Button variant="outline" className="w-full sm:w-auto">Import Notes</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default EBookMachineModule