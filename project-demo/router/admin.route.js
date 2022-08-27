const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin.controller');

router.post("/signin",
   body('adminEmail').notEmpty().isEmail(),
   body('adminPassword').notEmpty().isLength(8)
);

router.post('/category/add', upload.single('categoryImage'),
    body("categoryName").notEmpty(),
    adminController.addCategory
);

router.post('/category/delete',
    body("categeryId").notEmpty(),
    adminController.deleteCategory
);

router.get('/category/category-list',
    adminController.categoryList
);

router.post('/category/edit', upload.single('categoryImage'),
    body("categoryName").notEmpty(),
    body("categeryId").notEmpty(),
    adminController.editCategory
);

router.get('/gardener/gardener-list',adminController.gardenerList);

router.get("/category-by-id/:id", adminController.categoryById);

router.get("/nursery/nursery-list", adminController.nurseryList);

router.get("/user/user-list", adminController.userList);
module.exports = router;