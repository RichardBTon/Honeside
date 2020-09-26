
class personer(object):
    """docstring for personer."""

    def __init__(self, navn, klasse):
        self.navn = navn
        self.klasse = klasse


    def epost(self):
        return f'{self.navn}_{self.klasse}@gmail.com'


richard = personer("Richard", "3STF")

print(richard.epost())
