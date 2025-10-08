"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Modal from "../components/Modal";
import { useTheme } from "../components/ThemeProvider";

export default function AccountPage() {
  const [name, setName] = useState("Julia Maker");
  const [email, setEmail] = useState("julia@example.com");
  const { theme, setTheme } = useTheme();
  const [avatarUrl, setAvatarUrl] = useState("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const fileRef = useRef(null);

  function onPickAvatar() {
    fileRef.current?.click();
  }

  function onFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setAvatarUrl(String(reader.result));
    reader.readAsDataURL(file);
  }

  async function onSave() {
    setSaving(true);
    setSaved(false);
    await new Promise((r) => setTimeout(r, 600));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 1200);
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 text-white">
      <div className="card rounded-2xl p-6 text-[#1a2a3a] bg-white">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-[#d9e7ff] overflow-hidden relative">
            {avatarUrl && (
              <Image src={avatarUrl} alt="avatar" fill sizes="64px" className="object-cover" />
            )}
          </div>
          <div className="flex-1">
            <div className="text-sm text-[#6a7b8d]">Your Avatar</div>
            <button onClick={onPickAvatar} className="mt-1 px-3 py-1.5 rounded-md bg-[#1463bf] text-white text-sm">Upload</button>
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={onFile} />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-[#6a7b8d]">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-md border border-[#d9e7ff] px-3 py-2 text-[#1a2a3a] outline-none focus:ring-2 focus:ring-[#1463bf]" />
          </div>
          <div>
            <label className="text-xs text-[#6a7b8d]">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full rounded-md border border-[#d9e7ff] px-3 py-2 text-[#1a2a3a] outline-none focus:ring-2 focus:ring-[#1463bf]" />
          </div>
        </div>

        <div className="mt-6">
          <div className="text-sm font-semibold text-[#1a2a3a] mb-2">Theme</div>
          <div className="inline-flex rounded-xl bg-[#eef3fb] p-1">
            {(["light","dark"]).map((t) => (
              <button key={t} onClick={() => setTheme(t)} className={`px-3 py-1.5 rounded-lg text-sm ${theme===t?"bg-white text-[#1a2a3a]":"text-[#1a2a3a]/80"}`}>{t[0].toUpperCase()+t.slice(1)}</button>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-[#6a7b8d]">
            {saving ? "Saving..." : saved ? "Saved" : ""}
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setOpenDelete(true)} className="px-4 py-2 rounded-md bg-[#e23b2f] text-white">Delete Account</button>
            <button onClick={onSave} className="px-4 py-2 rounded-md bg-[#1463bf] text-white">Save Changes</button>
          </div>
        </div>
      </div>

      <Modal open={openDelete} onClose={() => setOpenDelete(false)} title="Delete Account?">
        This action cannot be undone. Are you sure you want to delete your account?
        <div className="mt-4 flex items-center justify-end gap-2">
          <button onClick={() => setOpenDelete(false)} className="px-4 py-2 rounded-md bg-[#d3d7de] text-[#1a2a3a]">Cancel</button>
          <button onClick={() => setOpenDelete(false)} className="px-4 py-2 rounded-md bg-[#e23b2f] text-white">Delete</button>
        </div>
      </Modal>
    </main>
  );
}


