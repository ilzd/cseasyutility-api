import { Router } from 'express'
import { getAllLineups, getLineupById, createLineup } from '../controllers/lineup.controller'

const router = Router()

router.get('/', getAllLineups)
router.get('/:id', getLineupById)
router.post('/', createLineup)

export default router