import { supabase } from "@/lib/supabase";

interface GalleryImage {
  name: string;
  url: string;
}

async function getGalleryImages(): Promise<GalleryImage[]> {
  const { data, error } = await supabase.storage.from("gallery").list("", {
    sortBy: { column: "created_at", order: "desc" },
  });

  if (error || !data) return [];

  return data
    .filter((file) => file.name !== ".emptyFolderPlaceholder")
    .map((file) => ({
      name: file.name,
      url: supabase.storage.from("gallery").getPublicUrl(file.name).data
        .publicUrl,
    }));
}

export default async function Gallery() {
  const images = await getGalleryImages();

  return (
    <div
      className="py-16"
      style={{
        paddingLeft: "10%",
        paddingRight: "10%",
        fontFamily: "var(--font-bodoni-moda)",
      }}
    >
      <h1 className="mb-8 text-3xl font-semibold text-zinc-900">Gallery</h1>

      {images.length === 0 ? (
        <p className="text-zinc-600">No gallery images yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <div
              key={image.name}
              className="overflow-hidden rounded-xl shadow-md"
            >
              <img
                src={image.url}
                alt={image.name.replace(/\.[^.]+$/, "")}
                className="h-72 w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
