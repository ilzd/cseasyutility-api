import { Router } from 'express'
import {
  getMapAreasByMapId,
  getMapAreaById,
  createMapArea,
  updateMapArea,
  deleteMapArea
} from '../controllers/mapArea.controller'

const router = Router()

router.get('/map/:mapId', getMapAreasByMapId)
router.get('/:id', getMapAreaById)
router.post('/', createMapArea)
router.put('/:id', updateMapArea)
router.delete('/:id', deleteMapArea)

export default router
