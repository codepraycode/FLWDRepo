# Generated by Django 3.1.4 on 2021-01-19 13:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Estore', '0006_auto_20210119_1451'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productcategory',
            name='thum_img',
            field=models.ImageField(blank=True, default='assets/img/productCategoryPlaceholder.jpg', upload_to='categoryPics'),
        ),
    ]
