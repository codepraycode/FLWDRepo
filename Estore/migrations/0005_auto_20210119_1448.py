# Generated by Django 3.1.4 on 2021-01-19 13:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Estore', '0004_auto_20210119_1441'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProductCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('thum_img', models.ImageField(default='assets/img/prodPlaceholder.jpg', upload_to='categoryPics')),
                ('date_added', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'ProductCategory',
                'verbose_name_plural': 'ProductCategories',
                'db_table': 'ProductCat_tb',
            },
        ),
        migrations.AlterField(
            model_name='product',
            name='category_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Estore.productcategory'),
        ),
    ]
