import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { FacultyControllers } from "./faculty.controller";
import { FacultyValidations } from "./faculty.validation";

const router = express.Router();

router.get("/", FacultyControllers.getAllFaculties);
router.get("/:id", FacultyControllers.getSingleFaculty);
router.patch(
  "/:id",
  validateRequest(FacultyValidations.updateFacultyValidationSchema),
  FacultyControllers.updateFaculty
);
router.delete("/:id", FacultyControllers.deleteSingleFaculty);

export const FacultyRoutes = router;
