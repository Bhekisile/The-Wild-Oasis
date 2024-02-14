import supabase, { SUPABASE_URL } from "./supabase";

export async function getCabins() {
  
  const { data, error } = await supabase
  .from('cabins')
  .select('*')

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function createCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");

  const imagePath = `${SUPABASE_URL}/storage/v1/object/public/cabin-images/${imageName}`;

  const { data, error } = await supabase
  .from('cabins')
  .insert([{ ...newCabin, image: imagePath }])

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase
  .from('cabins')
  .delete()
  .eq('id', id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
  return data;
}