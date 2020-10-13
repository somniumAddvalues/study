import sys
from PyQt5.QtWidgets import *
from GUI.resultUI import ResultUI


class MainGUI(QWidget):
    def __init__(self, targetList):
        QWidget.__init__(self)

        mainLayout = QVBoxLayout()

        inputLayout = self.createInputLayout()
        checkBoxLayout = self.createCheckBoxLayout(targetList)

        mainLayout.addLayout(inputLayout)

        mainLayout.addLayout(checkBoxLayout)
        mainLayout.addStretch(1)

        self.setLayout(mainLayout)

    def createInputLayout(self):
        lbl = QLabel("검색어 : ")
        editBox = QLineEdit()
        btnOk = QPushButton("확인")

        inputLayout = QHBoxLayout()
        inputLayout.addWidget(lbl)
        inputLayout.addWidget(editBox)
        inputLayout.addWidget(btnOk)

        btnOk.clicked.connect(self.btnOkClicked)

        return inputLayout

    # 체크박스 리스트만큼 생성
    def createCheckBoxLayout(self, targetList):
        row = 0
        col = 0

        checkBoxLayout = QGridLayout()

        for boxName in targetList:
            print(row, col)
            checkBoxLayout.addWidget(QCheckBox(boxName), row, col)
            row += col
            col = int((col + 1) % 2)

        return checkBoxLayout

    def btnOkClicked(self):

        # 버튼 클릭 시 -> 크롤링 로직 -> 결과 배열 가져와서 UI 띄움
        testList = ["https://wikidocs.net/36766", "https://www.acmicpc.net/", "https://wasd222.blogspot.com/"]

        ResultUI(self, testList)


if __name__ == '__main__':
    app = QApplication(sys.argv)

    # 검색 조건 배열 우리가 알아서 생성?(기간도 있으면 좋을 듯)
    checkBoxList = ["네이버", "구글", "네이버 카페", "다음", "트위터"]

    # 마우스, 키보드 입력에 의한 이벤트를 처리하는 위젯, 높이 순서대로 정렬됨
    form = MainGUI(checkBoxList)

    # QWidget의 크기를 조정하고, move로 좌표 이동(왼쪽 위가 기준)
    form.resize(400, 300)
    form.move(300, 300)

    # 타이틀 설정
    form.setWindowTitle("Example01")

    # 화면에 출력함, showFullScreen(), showMaximized(), showNormal() 등이 있음
    form.show()

    # 어플리케이션이 꺼지지 않게 루프 생성
    sys.exit(app.exec_())