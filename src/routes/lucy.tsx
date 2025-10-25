import { createFileRoute } from '@tanstack/react-router'
import type { AnyRoute } from '@tanstack/react-router'
import { LucyModule } from '../components/LucyModule'

export const Route = createFileRoute('/lucy')({
  component: LucyModule,
}) as AnyRoute