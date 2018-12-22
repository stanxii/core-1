package procurement

import (
	"errors"
)

type OrderID int

type Order struct {
	OrderID OrderID
	Project Project
	Date    string
	Status  OrderStatus
}

func NewOrder(p Project) (*Order, error) {
	return &Order{
		OrderID: 1,
		Project: p,
		Date:    "Today",
		Status:  BackOrdered,
	}, nil
}

var ErrMyError = errors.New("message")

type OrderStatus int

const (
	Complete OrderStatus = iota
	BackOrdered
)

func (s OrderStatus) String() string {
	switch s {
	case Complete:
		return "Complete"
	case BackOrdered:
		return "Back Ordered"
	}
	return ""
}
