"""empty message

Revision ID: 992f6c798f90
Revises: 4dc399aba9bd
Create Date: 2023-04-14 22:26:30.808818

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '992f6c798f90'
down_revision = '4dc399aba9bd'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('date',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('date', sa.Date(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('date')
    # ### end Alembic commands ###
