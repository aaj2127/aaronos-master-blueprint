import { createFileRoute } from '@tanstack/react-router'
import type { AnyRoute } from '@tanstack/react-router'
import { Dashboard } from '../components/Dashboard'

export const Route = createFileRoute('/')({
  component: Dashboard,
}) as AnyRoute