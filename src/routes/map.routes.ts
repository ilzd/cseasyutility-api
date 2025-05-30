import { Router } from 'express'
import {
  getAllMaps,
  getMapById,
  createMap,
  updateMap,
  deleteMap,
} from '../controllers/map.controller'

const router = Router()

router.get('/', getAllMaps)
router.get('/:id', getMapById)
router.post('/', createMap)
router.put('/:id', updateMap)
router.delete('/:id', deleteMap)

export default router
