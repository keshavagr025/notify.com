import { useState } from "react"

interface Note {
  id: number
  title: string
  content: string
}

export default function Notes() {
  const [notes, setNotes] = useState<Note[]>([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [editId, setEditId] = useState<number | null>(null)

  const addNote = () => {
    if (!title.trim() || !content.trim()) return

    if (editId !== null) {
      setNotes(
        notes.map((note) =>
          note.id === editId ? { ...note, title, content } : note
        )
      )
      setEditId(null)
    } else {
      setNotes([...notes, { id: Date.now(), title, content }])
    }

    setTitle("")
    setContent("")
  }

  const editNote = (note: Note) => {
    setTitle(note.title)
    setContent(note.content)
    setEditId(note.id)
  }

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  const cancelEdit = () => {
    setTitle("")
    setContent("")
    setEditId(null)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Notes</h2>

      {/* Add / Edit Note */}
      <div className="mb-6 border rounded p-4 bg-white">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        />

        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded mb-3 h-24"
        />

        <div className="flex gap-2">
          <button
            onClick={addNote}
            className="px-4 py-2 bg-black text-white rounded"
          >
            {editId !== null ? "Update" : "Add Note"}
          </button>

          {editId !== null && (
            <button
              onClick={cancelEdit}
              className="px-4 py-2 bg-gray-400 text-white rounded"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* Notes List */}
      <div className="space-y-3">
        {notes.length === 0 ? (
          <p className="text-gray-500">
            No notes yet. Add your first note above.
          </p>
        ) : (
          notes.map((note) => (
            <div key={note.id} className="border rounded p-4 bg-white">
              <h3 className="font-semibold mb-2">{note.title}</h3>
              <p className="text-gray-700 mb-3">{note.content}</p>

              <div className="flex gap-2">
                <button
                  onClick={() => editNote(note)}
                  className="px-3 py-1 text-sm bg-gray-200 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteNote(note.id)}
                  className="px-3 py-1 text-sm bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
