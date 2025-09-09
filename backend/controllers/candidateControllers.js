import Candidate from '../models/Candidates.js';

export const candidateController = {
    //create new candidate
    createCandidate: async (req, res) =>{
        try {
            const candidate = new Candidate(req.body);
            const savedCandidate = await candidate.save();

            res.status(201).json({
                success: true,
                message: 'Candidate created successfully',
                data: savedCandidate
            });
        }catch (error){
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },

    //get all candidates
    getAllCandidates: async (req, res) =>{
        try {
            const candidates = await Candidate.find();

            res.json({
                success: true,
                count: candidates.length,
                data: candidates
            });
        } catch (error){
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
};