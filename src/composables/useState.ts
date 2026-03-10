import { reactive, toRefs } from 'vue'

const tableMaterials = [
  {
    name: 'Light Wood',
    path: '/materials/Wood048_2K-JPG',
    filename: 'Wood048_2K-JPG',
    thumbnail: '/materials/Wood048_2K-JPG/Wood048.webp',
  },
  {
    name: 'Dark Wood',
    path: '/materials/WoodFloor008_2K-JPG',
    filename: 'WoodFloor008_2K-JPG',
    thumbnail: '/materials/WoodFloor008_2K-JPG/WoodFloor008.webp',
  },
  {
    name: 'Orange Wood',
    path: '/materials/Wood069_2K-JPG',
    filename: 'Wood069_2K-JPG',
    thumbnail: '/materials/Wood069_2K-JPG/Wood069.webp',
  },
]

const accessoriesColors = [
  {
    name: 'Metallic dark gray',
    color: '#5B5B5B',
    metalness: 0.5,
    roughness: 0.5,
  },
  {
    name: 'Gloss White',
    color: '#FFFFFF',
    metalness: 0.2,
    roughness: 0.2,
  },
]

const state = reactive({
  tableMaterials,
  selectedTableMaterial: tableMaterials[0],
  accessoriesColors,
  selectedAccessoriesColor: accessoriesColors[0],
})

export const useState = () => {
  return {
    ...toRefs(state),
  }
}
