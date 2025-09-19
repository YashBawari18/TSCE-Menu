// src/pages/RecipesPage.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  Clock,
  Users,
  Leaf,
  Globe,
  Star,
  Heart,
  BookOpen,
  X,
  Check,
} from "lucide-react";

type Recipe = {
  id: number;
  title: string;
  cuisine?: string;
  time?: string;
  image: string;
  rating?: number;
  difficulty?: string;
  servings?: number;
  ingredients: string[];
  baseSteps: string[];
};

const RecipesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [userIngredients, setUserIngredients] = useState("");
  const [imageError, setImageError] = useState<Record<number, boolean>>({});

  const placeholderSvg = encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'><rect width='100%' height='100%' fill='#111827'/><text x='50%' y='50%' fill='#9CA3AF' font-size='28' text-anchor='middle' font-family='Arial' dy='.3em'>Image not available</text></svg>`
  );
  const placeholder = `data:image/svg+xml;utf8,${placeholderSvg}`;

  const filterOptions = [
    { id: "vegetarian", label: "Vegetarian", icon: Leaf, color: "from-green-500 to-emerald-600" },
    { id: "quick", label: "< 30 min", icon: Clock, color: "from-blue-500 to-cyan-600" },
    { id: "family", label: "Family Size", icon: Users, color: "from-purple-500 to-pink-600" },
    { id: "global", label: "International", icon: Globe, color: "from-orange-500 to-red-600" },
  ];

  const recipes: Recipe[] = [
    {
      id: 1,
      title: "AI Fusion Pasta",
      cuisine: "Italian",
      time: "25 min",
      image: "https://i.pinimg.com/1200x/24/d3/62/24d362c6c549820edada6ed8b85b55a9.jpg",
      rating: 4.9,
      difficulty: "Easy",
      servings: 4,
      ingredients: ["Pasta", "Olive Oil", "Garlic", "Parmesan"],
      baseSteps: ["Boil pasta in salted water.", "Sauté garlic in oil, add sauce.", "Toss pasta with sauce and top with parmesan."],
    },
    {
      id: 2,
      title: "Smart Stir Fry",
      cuisine: "Asian",
      time: "15 min",
      image: "https://i.pinimg.com/1200x/35/c1/d7/35c1d7488e9f466a2dd38bceb2fb9c01.jpg",
      rating: 4.8,
      difficulty: "Easy",
      servings: 2,
      ingredients: ["Mixed Vegetables", "Soy Sauce", "Sesame Oil", "Rice"],
      baseSteps: ["Heat oil in wok.", "Stir-fry vegetables on high heat.", "Season with soy sauce and serve on rice."],
    },
    {
      id: 3,
      title: "Quantum Quinoa Bowl",
      cuisine: "Healthy",
      time: "20 min",
      image: "https://i.pinimg.com/736x/09/fb/f9/09fbf9c70c5adc9467f5571988280e8e.jpg",
      rating: 5.0,
      difficulty: "Medium",
      servings: 1,
      ingredients: ["Quinoa", "Avocado", "Greens", "Lime"],
      baseSteps: ["Cook quinoa until fluffy.", "Assemble bowl with greens and avocado.", "Dress with lime and olive oil."],
    },
    {
      id: 4,
      title: "Cyber Curry",
      cuisine: "Indian",
      time: "35 min",
      image: "https://i.pinimg.com/1200x/fa/d6/88/fad68848a79e3af3f76e8422b34da6dd.jpg",
      rating: 4.7,
      difficulty: "Medium",
      servings: 6,
      ingredients: ["Onion", "Tomato", "Spices", "Coconut Milk"],
      baseSteps: ["Sauté onions and spices.", "Add tomato and simmer.", "Pour coconut milk and cook until thick."],
    },
    {
      id: 5,
      title: "Holographic Hummus",
      cuisine: "Middle-Eastern",
      time: "10 min",
      image: "https://i.pinimg.com/1200x/43/43/b4/4343b42187bcb1ce6172bfba0ff830bc.jpg",
      rating: 4.6,
      difficulty: "Easy",
      servings: 4,
      ingredients: ["Chickpeas", "Tahini", "Lemon", "Garlic"],
      baseSteps: ["Blend chickpeas with tahini and lemon.", "Add garlic and seasoning.", "Adjust texture with oil or water."],
    },
    {
      id: 6,
      title: "Neural Network Noodles",
      cuisine: "Japanese",
      time: "30 min",
      image: "https://i.pinimg.com/1200x/85/09/10/850910eeb1283265cdded6dc94107ba4.jpg",
      rating: 4.9,
      difficulty: "Hard",
      servings: 2,
      ingredients: ["Noodles", "Broth", "Spring Onions", "Protein"],
      baseSteps: ["Prepare the broth.", "Cook noodles until tender.", "Assemble and garnish with spring onions and protein."],
    },
  ];

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const viewRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setUserIngredients(""); // reset input
  };

  const substitutionMap: Record<string, string[]> = {
    "olive oil": ["any neutral oil", "butter"],
    garlic: ["onion", "garlic powder"],
    pasta: ["rice", "noodles"],
    quinoa: ["rice", "millet"],
    "soy sauce": ["tamari", "salt + vinegar"],
    "coconut milk": ["yogurt", "cream"],
    parmesan: ["yogurt", "crumbled paneer"],
    chickpeas: ["white beans", "lentils"],
  };

  
  const buildZeroWastePlan = (recipe: Recipe, userIngText: string) => {
    const userSet = new Set(
      userIngText
        .split(",")
        .map((x) => x.trim().toLowerCase())
        .filter(Boolean)
    );

    const have = recipe.ingredients.filter((i) => userSet.has(i.toLowerCase()));
    const missing = recipe.ingredients.filter((i) => !userSet.has(i.toLowerCase()));

    const plan: string[] = [];

    if (have.length > 0) {
      plan.push(`You have: ${have.join(", ")} — great, we'll use these.`);
      plan.push("Adapted steps (use what you have):");
      recipe.baseSteps.forEach((s, idx) => plan.push(`${idx + 1}. ${s}`));
      if (missing.length > 0) {
        plan.push(`Missing: ${missing.join(", ")}.`);
        missing.forEach((m) => {
          const key = m.toLowerCase();
          const subs = substitutionMap[key];
          if (subs) plan.push(`Substitute for ${m}: ${subs.join(" or ")}.`);
          else plan.push(`No direct substitution found for ${m}. Use pantry staples or improvise.`);
        });
      } else {
        plan.push("You have everything — follow the original steps.");
      }
    } else {
      
      plan.push("No core ingredients detected from your input.");
      plan.push("Zero-waste options & tips:");
      plan.push("• Use vegetable peels/ends to make a quick stock.");
      plan.push("• Combine leftover grains + any veg + a sauce to create a bowl.");
      plan.push("• Roast scraps for crunchy salad toppers.");
      plan.push("• If you share what you have (comma-separated), I can tailor steps.");
    }

    return { have, missing, plan };
  };

  
  const onImgError = (id: number) => {
    setImageError((p) => ({ ...p, [id]: true }));
    
  };

  return (
    <div className="pt-24 pb-16 px-4 min-h-screen bg-black/50">
      <div className="max-w-7xl mx-auto">
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400">
            ZERO-WASTE RECIPE FINDER
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto">Click any card, tell the app what you have and get a zero-waste plan.</p>
        </motion.div>

        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((r, idx) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ scale: 1.03 }}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-gray-700 bg-gradient-to-br from-gray-900/70 to-black/60 shadow-lg"
              onClick={() => viewRecipe(r)}
            >
              <div className="relative h-56 overflow-hidden bg-gray-800">
                <motion.img
                  src={imageError[r.id] ? placeholder : r.image}
                  alt={r.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={() => onImgError(r.id)}
                />
                <div className="absolute top-4 right-4 bg-black/60 rounded-full px-3 py-1 flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-yellow-400 font-semibold text-sm">{r.rating ?? "—"}</span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(r.id);
                  }}
                  className="absolute top-4 left-4 p-2 rounded-full bg-black/50"
                >
                  <Heart className={`w-5 h-5 ${favorites.includes(r.id) ? "text-red-400" : "text-gray-300"}`} />
                </button>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2">{r.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{r.cuisine} • {r.time} • {r.difficulty}</p>
                <div className="flex gap-2">
                  <button
                    onClick={(e) => { e.stopPropagation(); viewRecipe(r); }}
                    className="flex items-center gap-2 px-4 py-2 border border-purple-600 rounded-xl text-purple-300 hover:bg-purple-600/10 transition"
                  >
                    <BookOpen className="w-4 h-4" /> View & cook
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleFavorite(r.id); }}
                    className="px-3 py-2 border rounded-xl border-gray-700 text-gray-300 hover:bg-gray-800/60 transition"
                  >
                    {favorites.includes(r.id) ? "Saved" : "Save"}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* modal */}
      <AnimatePresence>
        {selectedRecipe && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          >
            <motion.div initial={{ scale: 0.95, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 30 }} className="bg-gray-900 rounded-2xl w-full max-w-3xl overflow-auto">
              <div className="relative">
                <button onClick={() => setSelectedRecipe(null)} className="absolute top-4 right-4 p-3">
                  <X className="w-6 h-6 text-gray-300" />
                </button>
                <img
                  src={imageError[selectedRecipe.id] ? placeholder : selectedRecipe.image}
                  alt={selectedRecipe.title}
                  onError={() => onImgError(selectedRecipe.id)}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">{selectedRecipe.title}</h2>
                <p className="text-gray-400 mb-4">{selectedRecipe.cuisine} • {selectedRecipe.time} • Serves {selectedRecipe.servings}</p>

                <label className="block text-sm text-gray-300 mb-2">What ingredients do you have? <span className="text-xs text-gray-400">(comma-separated)</span></label>
                <input
                  type="text"
                  placeholder="e.g. pasta, garlic, olive oil"
                  value={userIngredients}
                  onChange={(e) => setUserIngredients(e.target.value)}
                  className="w-full bg-gray-800 rounded-lg p-3 mb-4 border border-gray-700 text-white"
                />

               
                <ZeroWastePlanView recipe={selectedRecipe} userInput={userIngredients} buildPlan={buildZeroWastePlan} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


function ZeroWastePlanView({
  recipe,
  userInput,
  buildPlan,
}: {
  recipe: Recipe;
  userInput: string;
  buildPlan: (r: Recipe, ui: string) => { have: string[]; missing: string[]; plan: string[] };
}) {
  const { have, missing, plan } = buildPlan(recipe, userInput);

  return (
    <div className="mt-2">
      <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-800 rounded-lg">
          <h4 className="text-sm text-gray-300 font-semibold mb-2">Ingredients (recipe)</h4>
          <ul className="text-gray-300 space-y-1">
            {recipe.ingredients.map((ing) => {
              const present = have.includes(ing);
              return (
                <li key={ing} className="flex items-center gap-2">
                  <span className={`p-1 rounded-md ${present ? "bg-green-800" : "bg-gray-700"}`}>
                    <Check className="w-4 h-4 text-white" />
                  </span>
                  <span className={`${present ? "text-green-300" : "text-gray-300"}`}>{ing}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="p-4 bg-gray-800 rounded-lg">
          <h4 className="text-sm text-gray-300 font-semibold mb-2">Quick result</h4>
          <div className="text-gray-300 text-sm space-y-2">
            {plan.map((p, i) => (
              <div key={i} className="leading-relaxed">{p}</div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-sm text-gray-300 font-semibold mb-2">Final steps</h4>
        <ol className="list-decimal list-inside text-gray-300 space-y-2">
          {plan
            .filter((s) => s.length > 0)
            .map((s, i) => (
              <li key={i}>{s}</li>
            ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipesPage;

