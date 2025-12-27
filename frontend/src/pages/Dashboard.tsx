import {
  Upload,
  FileText,
  Network,
  Sparkles,
  MessageSquare,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  return (
    <div className="space-y-8">

      {/* HERO */}
      <div className="rounded-lg border bg-background p-6">
        <h1 className="text-2xl font-bold">
          Document Intelligence Dashboard
        </h1>
        <p className="mt-2 text-muted-foreground">
          Upload your documents and let AI generate summaries, mind maps,
          and structured insights automatically.
        </p>

        <div className="mt-4 flex gap-3">
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            Upload Documents
          </Button>

          <Button variant="outline">
            Batch Upload
          </Button>
        </div>
      </div>

      {/* AI CAPABILITIES */}
      <div>
        <h2 className="mb-4 text-lg font-semibold">
          AI-Powered Intelligence
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <AICard
            icon={<Sparkles />}
            title="Automatic Summaries"
            description="Instant summaries with key points and highlights."
          />
          <AICard
            icon={<Network />}
            title="Mind Maps"
            description="Visual knowledge graphs from your documents."
          />
          <AICard
            icon={<MessageSquare />}
            title="Question Answering"
            description="Ask anything in natural language."
          />
          <AICard
            icon={<FileText />}
            title="Structured Notes"
            description="Clean notes with headings and sections."
          />
        </div>
      </div>

      {/* RECENT DOCUMENTS */}
      <div className="rounded-lg border bg-background p-4">
        <h2 className="mb-4 text-lg font-semibold">
          Recently Processed Documents
        </h2>

        <div className="space-y-3">
          <DocumentRow
            name="LLM_Architecture.pdf"
            status="Completed"
          />
          <DocumentRow
            name="Research_Paper.docx"
            status="Processing"
          />
          <DocumentRow
            name="Scanned_Notes.png"
            status="Completed"
          />
        </div>
      </div>
    </div>
  )
}

/* ---------------- COMPONENTS ---------------- */

function AICard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="rounded-lg border bg-background p-4">
      <div className="mb-2 flex items-center gap-2 text-primary">
        {icon}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  )
}

function DocumentRow({
  name,
  status,
}: {
  name: string
  status: "Completed" | "Processing"
}) {
  return (
    <div className="flex items-center justify-between rounded-md border p-3">
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-xs text-muted-foreground">
          Status: {status}
        </p>
      </div>

      {status === "Completed" ? (
        <div className="flex gap-2">
          <Button size="sm" variant="outline">
            Summary
          </Button>
          <Button size="sm" variant="outline">
            Mind Map
          </Button>
          <Button size="sm" variant="outline">
            Ask AI
          </Button>
        </div>
      ) : (
        <Button size="sm" disabled>
          Processing…
        </Button>
      )}
    </div>
  )
}
