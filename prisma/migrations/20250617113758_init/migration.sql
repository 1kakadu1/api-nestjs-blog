-- CreateTable
CREATE TABLE "banners" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "preview" TEXT NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "postId" INTEGER,
    CONSTRAINT "banners_postId_fkey" FOREIGN KEY ("postId") REFERENCES "posts" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "banner_filters" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" TEXT NOT NULL,
    "label" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT
);

-- CreateTable
CREATE TABLE "posts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "short_description" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "updatedAt" DATETIME,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "seoId" INTEGER NOT NULL,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "isPopular" BOOLEAN NOT NULL DEFAULT false,
    "authorId" INTEGER NOT NULL,
    CONSTRAINT "posts_seoId_fkey" FOREIGN KEY ("seoId") REFERENCES "SeoModel" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "posts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CategoryModel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "preview" TEXT,
    "isDefault" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "tags_post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "updatedAt" DATETIME,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "PostImage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "alt" TEXT DEFAULT ''
);

-- CreateTable
CREATE TABLE "SeoModel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "keywords" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "robots" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "TagOnPost" (
    "postId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    PRIMARY KEY ("postId", "tagId"),
    CONSTRAINT "TagOnPost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "posts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TagOnPost_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "tags_post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CategoryOnPost" (
    "postId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,

    PRIMARY KEY ("postId", "categoryId"),
    CONSTRAINT "CategoryOnPost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "posts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CategoryOnPost_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "CategoryModel" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_BannerFiltersModelToBannerModel" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_BannerFiltersModelToBannerModel_A_fkey" FOREIGN KEY ("A") REFERENCES "banner_filters" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_BannerFiltersModelToBannerModel_B_fkey" FOREIGN KEY ("B") REFERENCES "banners" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_PostImageToPostModel" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_PostImageToPostModel_A_fkey" FOREIGN KEY ("A") REFERENCES "PostImage" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PostImageToPostModel_B_fkey" FOREIGN KEY ("B") REFERENCES "posts" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "banner_filters_value_idx" ON "banner_filters"("value");

-- CreateIndex
CREATE INDEX "users_email_idx" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "posts_seoId_key" ON "posts"("seoId");

-- CreateIndex
CREATE INDEX "posts_slug_title_id_idx" ON "posts"("slug", "title", "id");

-- CreateIndex
CREATE UNIQUE INDEX "posts_id_slug_key" ON "posts"("id", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "CategoryModel_id_slug_key" ON "CategoryModel"("id", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "tags_post_id_slug_key" ON "tags_post"("id", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "_BannerFiltersModelToBannerModel_AB_unique" ON "_BannerFiltersModelToBannerModel"("A", "B");

-- CreateIndex
CREATE INDEX "_BannerFiltersModelToBannerModel_B_index" ON "_BannerFiltersModelToBannerModel"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PostImageToPostModel_AB_unique" ON "_PostImageToPostModel"("A", "B");

-- CreateIndex
CREATE INDEX "_PostImageToPostModel_B_index" ON "_PostImageToPostModel"("B");
